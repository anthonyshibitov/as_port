import React, { useState, useMemo, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

function Laurel() {
    const months = [
        ['January', 1],
        ['February', 2],
        ['March', 3],
        ['April', 4],
        ['May', 5],
        ['June', 6],
        ['July', 7],
        ['August', 8],
        ['September', 9],
        ['October', 10],
        ['November', 11],
        ['December', 12]
    ];

    const currentYear = new Date().getFullYear();

    const [kids, setKids] = useState([]);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [infantDate, setInfantDate] = useState("");
    const [waddlerDate, setWaddlerDate] = useState("");
    const [toddlerDate, setToddlerDate] = useState("");
    const [year, setYear] = useState(currentYear);
    const [id, setId] = useState(0);

    const addKid = () => {
        // Replace dashes with slashes to avoid any interpretation issues
        const formattedDate = date.replace(/-/g, '/');
        const kidDate = new Date(formattedDate); // Create a new Date using the formatted string
    
        const formattedInfantDate = infantDate ? infantDate.replace(/-/g, '/') : null;
        const kidInfantGradDate = formattedInfantDate ? new Date(formattedInfantDate) : null;
    
        const formattedWaddlerDate = waddlerDate ? waddlerDate.replace(/-/g, '/') : null;
        const kidWaddlerGradDate = formattedWaddlerDate ? new Date(formattedWaddlerDate) : null;
    
        const formattedToddlerDate = toddlerDate ? toddlerDate.replace(/-/g, '/') : null;
        const kidToddlerGradDate = formattedToddlerDate ? new Date(formattedToddlerDate) : null;
    
        if (name && date) {
            setKids([...kids, {
                id,
                name,
                date: kidDate,
                infantGradDate: kidInfantGradDate,
                waddlerGradDate: kidWaddlerGradDate,
                toddlerGradDate: kidToddlerGradDate
            }]);
            setId(id + 1);
            setName("");
            setDate("");
            setInfantDate("");
            setWaddlerDate("");
            setToddlerDate("");
        }
    };

    useEffect(() => {
        const storedKids = JSON.parse(localStorage.getItem('kids'));
        if (storedKids) {
            const loadedKids = storedKids.map(kid => ({
                ...kid,
                date: new Date(kid.date),
                infantGradDate: kid.infantGradDate ? new Date(kid.infantGradDate) : null,
                waddlerGradDate: kid.waddlerGradDate ? new Date(kid.waddlerGradDate) : null,
                toddlerGradDate: kid.toddlerGradDate ? new Date(kid.toddlerGradDate) : null
            }));
            setKids(loadedKids);
            setId(loadedKids.length > 0 ? loadedKids[loadedKids.length - 1].id + 1 : 0); // Set next id
        }
    }, []);

    useEffect(() => {
        const kidsToSave = kids.map(kid => ({
            ...kid,
            date: kid.date.toISOString(),
            infantGradDate: kid.infantGradDate ? kid.infantGradDate.toISOString() : null,
            waddlerGradDate: kid.waddlerGradDate ? kid.waddlerGradDate.toISOString() : null,
            toddlerGradDate: kid.toddlerGradDate ? kid.toddlerGradDate.toISOString() : null
        }));
        localStorage.setItem('kids', JSON.stringify(kidsToSave));
    }, [kids]);

    const removeKid = (id) => {
        setKids(kids.filter(kid => kid.id !== id));
    };

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleDate = (e) => {
        const newDate = e.target.value;
        setDate(newDate);

        const formattedDate = new Date(newDate);
        setInfantDate(new Date(formattedDate.setFullYear(formattedDate.getFullYear() + 1)).toISOString().split('T')[0]);
        setWaddlerDate(new Date(formattedDate.setFullYear(formattedDate.getFullYear() + 1)).toISOString().split('T')[0]);
        setToddlerDate(new Date(formattedDate.setFullYear(formattedDate.getFullYear() + 1)).toISOString().split('T')[0]);
    };

    const handleInfantDate = (e) => {
        setInfantDate(e.target.value);
    }

    const handleWaddlerDate = (e) => {
        setWaddlerDate(e.target.value);
    }

    const handleToddlerDate = (e) => {
        setToddlerDate(e.target.value);
    }

    const handleYear = (e) => {
        setYear(e.target.value);
    };

    const ageGroups = useMemo(() => {
        return months.map((month) => {
            const currentDate = new Date(parseInt(year), month[1] - 1, 1);
            let infants = [];
            let waddlers = [];
            let toddlers = [];
    
            kids.forEach(kid => {
                let isInfant = false;
                let isWaddler = false;
                let isToddler = false;
                const daysSinceBirth = Math.floor((currentDate - kid.date) / (1000 * 60 * 60 * 24));
                if(currentDate >= 0 && currentDate < kid.infantGradDate && daysSinceBirth >= 0){
                    isInfant = true;
                } else if (currentDate >= kid.infantGradDate && currentDate < kid.waddlerGradDate){
                    isWaddler = true;
                } else if (currentDate >= kid.waddlerGradDate && currentDate < kid.toddlerGradDate){
                    isToddler = true;
                }

                console.log(month);
                console.log(currentDate);
                console.log(kid);
                console.log(`infant ${isInfant}`);
                console.log(`waddler ${isWaddler}`);
                console.log(`toddler ${isToddler}`);
                console.log(`we are checking if ${currentDate} >= ${kid.toddlerGradDate}`)
                console.log(`days since birth ${daysSinceBirth}`);
                if (isInfant) infants.push(kid.name);
                else if (isWaddler) waddlers.push(kid.name);
                else if (isToddler) toddlers.push(kid.name);
            });
    
            return {
                month: month[0],
                infants: { count: infants.length, names: infants.join(', ') },
                waddlers: { count: waddlers.length, names: waddlers.join(', ') },
                toddlers: { count: toddlers.length, names: toddlers.join(', ') },
            };
        });
    }, [year, kids]);

    return (
        <div className="container">
            <div className="top-container">
                    <div className="title">
                        <span className="soft-red">L</span>
                        <span className="soft-orange">a</span>
                        <span className="soft-green">u</span>
                        <span className="soft-blue">r</span>
                        <span className="soft-indigo">e</span>
                        <span className="soft-violet">l</span>
                        <span className="soft-red">'s</span> &nbsp;
                        <span className="soft-orange">C</span>
                        <span className="soft-green">l</span>
                        <span className="soft-blue">a</span>
                        <span className="soft-indigo">s</span>
                        <span className="soft-violet">s</span> &nbsp;
                        <span className="soft-red">C</span>
                        <span className="soft-orange">a</span>
                        <span className="soft-green">l</span>
                        <span className="soft-blue">c</span>
                        <span className="soft-indigo">u</span>
                        <span className="soft-violet">l</span>
                        <span className="soft-red">a</span>
                        <span className="soft-orange">t</span>
                        <span className="soft-green">o</span>
                        <span className="soft-blue">r</span>
                    </div>
            </div>
            <div className="input">
                <div className="controls">
                    <input type="text" name="kid" id="kid" placeholder="Name" value={name} onChange={handleName} />
                    <div className="vert">
                        <div>Birth date</div>
                        <input type="date" name="bday" id="bday" value={date} onChange={handleDate} />
                    </div>
                    <div className="vert">
                        <div>Infant grad date</div>
                        <input type="date" name="iday" id="iday" value={infantDate} onChange={handleInfantDate} />
                    </div>
                    <div className="vert">
                        <div>Waddler grad date</div>
                        <input type="date" name="wday" id="wday" value={waddlerDate} onChange={handleWaddlerDate} />
                    </div>
                    <div className="vert">
                        <div>Toddler grad date</div>
                        <input type="date" name="tday" id="tday" value={toddlerDate} onChange={handleToddlerDate} />
                    </div>
                    <button type="button" onClick={addKid}>Add</button>
                    <label htmlFor="date">Generate for year:</label>
                    <input id="date" type="number" min="1900" max="2099" step="1" value={year} onChange={handleYear} />
                </div>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Month</th>
                            <th>Infant</th>
                            <th>Waddler</th>
                            <th>Toddler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ageGroups.map((group, index) => (
                            <tr key={index}>
                                <td>{group.month}</td>
                                <td>
                                    {group.infants.count > 0 && `${group.infants.count} - `}{group.infants.names}
                                </td>
                                <td>
                                    {group.waddlers.count > 0 && `${group.waddlers.count} - `}{group.waddlers.names}
                                </td>
                                <td>
                                    {group.toddlers.count > 0 && `${group.toddlers.count} - `}{group.toddlers.names}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {kids.map((kid) => (
                    <div key={kid.id} className="kid-item">
                        <span className="kid-name">{kid.name}</span>
                        <span className="kid-date">Birth date: {kid.date.toDateString()}</span>
                        <span className="kid-date">Infant grad date: {kid.infantGradDate.toDateString()}</span>
                        <span className="kid-date">Waddler grad date: {kid.waddlerGradDate.toDateString()}</span>
                        <span className="kid-date">Toddler grad date: {kid.toddlerGradDate.toDateString()}</span>
                        <button type="button" className="remove-btn" onClick={() => removeKid(kid.id)}>X</button>
                    </div>
                ))}
            </div>
            <div>
                <h2>Instructions</h2>
                <p>This application will generate a yearly grouping of infants, waddlers, and toddlers by month. The grouping of each child will change depending on their age and birth date.</p>
                <p>Add a name and birthday (in MM/DD/YYYY format) at the top, and click 'Add' to add them to the calendar. Children can be removed from the calendar by clicking the red X after their name in the list below the calendar.</p>
                <p>The calendar will default to the current year, {currentYear}, but this can be changed to see past and future groupings by changing the year value in the 'Generate for year' input.</p>
                <p>Once you've added all the children, you can press Control + P at the same time to open the print dialog, and print the calendar.</p>
                <p>NOTE: Data is stored *locally*. So if you use the same computer, the same kids entered will be saved between sessions. If you use a different computer though, your entries will not be saved.</p>
                <p>💘</p>
            </div>
        </div>
    );
}

// Render your React component
const root = createRoot(document.getElementById('app'));
root.render(<Laurel />);
