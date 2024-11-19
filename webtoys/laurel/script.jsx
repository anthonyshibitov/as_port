import React, { useState, useMemo, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

const formatDate = (date) => {
    const month = date.getMonth() + 1; // getMonth() returns 0-11, so add 1
    const day = date.getDate();
    const year = date.getFullYear();
    
    return `${month}/${day}/${year}`;
};

function addModal({ kid, addFunction, close}) {
    return (
        <>

        </>
    )
}

function EditModal({ kid, editFunction, close }) {
    function formatDateToInput(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // months are zero-indexed
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    console.log(kid);
    const [name, setName] = useState(kid.name);
    const [date, setDate] = useState(formatDateToInput(kid.date));
    const [enrollDate, setEnrollDate] = useState(formatDateToInput(kid.enrollDate));
    const [infantDate, setInfantDate] = useState(formatDateToInput(kid.infantGradDate));
    const [waddlerDate, setWaddlerDate] = useState(formatDateToInput(kid.waddlerGradDate));
    const [toddlerDate, setToddlerDate] = useState(formatDateToInput(kid.toddlerGradDate));
    const handleDate = (date) => {
        setDate(date);
    }
    const handleEnrollDate = (date) => {
        setEnrollDate(date);
    }
    const handleInfantDate = (date) => {
        setInfantDate(date);
    }
    const handleWaddlerDate = (date) => {
        setWaddlerDate(date);
    }
    const handleToddlerDate = (date) => {
        setToddlerDate(date);
    }
    const handleName = (name) => {
        setName(name);
    }

    const saveAllInfo = () => {
        editFunction(kid.id, 'date', date.replace(/-/g, '/'));
        editFunction(kid.id, 'enrollDate', enrollDate.replace(/-/g, '/'));
        editFunction(kid.id, 'infantGradDate', infantDate.replace(/-/g, '/'));
        editFunction(kid.id, 'waddlerGradDate', waddlerDate.replace(/-/g, '/'));
        editFunction(kid.id, 'toddlerGradDate', toddlerDate.replace(/-/g, '/'));
        editFunction(kid.id, 'name', name);
    }

    const exitModal = () => {
        close();
    }

    return (
        <div className="modal">
            <div className="modal-container">
                <div className="modal-controls">
                    <div className="modal-title">
                        Edit entry
                    </div>
                    <div className='modal-line'>
                        <span>Name:</span>
                        <span><input type="text" value={name} onChange={(e) => {handleName(e.target.value)}} /></span>
                    </div>
                    <div className='modal-line'>
                        <span>Birth date:</span>
                        <span><input type="date" onChange={(e) => {handleDate(e.target.value)}} value={date} /></span>
                    </div>
                    <div className='modal-line'>
                        <span>Enrollment date:</span>
                        <span><input type="date" onChange={(e) => {handleEnrollDate(e.target.value)}} value={enrollDate} /></span>
                    </div>
                    <div className='modal-line'>
                        <span>Infant graduation date:</span>
                        <span><input type="date" onChange={(e) => {handleInfantDate(e.target.value)}} value={infantDate} /></span>
                    </div>
                    <div className='modal-line'>
                        <span>Waddler graduation date:</span>
                        <span><input type="date" onChange={(e) => {handleWaddlerDate(e.target.value)}} value={waddlerDate} /></span>
                    </div>
                    <div className='modal-line'>
                        <span>Toddler graduation date:</span>
                        <span><input type="date" onChange={(e) => {handleToddlerDate(e.target.value)}} value={toddlerDate} /></span>
                    </div>
                    <button onClick={() => saveAllInfo()}>Save</button>
                    <button onClick={() => exitModal()}>Exit</button>
                </div>
            </div>
        </div>
    );
}

function ClassCalc() {
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
    const [enrollDate, setEnrollDate] = useState("");
    const [infantDate, setInfantDate] = useState("");
    const [waddlerDate, setWaddlerDate] = useState("");
    const [toddlerDate, setToddlerDate] = useState("");
    const [year, setYear] = useState(currentYear);

    const [id, setId] = useState(0);
    const [editingKid, setEditingKid] = useState();

    const addKid = () => {
        // Replace dashes with slashes to avoid any interpretation issues
        const formattedDate = date.replace(/-/g, '/');
        const kidDate = new Date(formattedDate); // Create a new Date using the formatted string
    
        const formattedEnrollDate = enrollDate ? enrollDate.replace(/-/g, '/') : null;
        const kidEnrollDate = formattedEnrollDate ? new Date(formattedEnrollDate) : null;

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
                enrollDate: kidEnrollDate,
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
                enrollDate: kid.enrollDate ? new Date(kid.enrollDate) : null,
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
            enrollDate: kid.enrollDate ? kid.enrollDate.toISOString() : null,
            infantGradDate: kid.infantGradDate ? kid.infantGradDate.toISOString() : null,
            waddlerGradDate: kid.waddlerGradDate ? kid.waddlerGradDate.toISOString() : null,
            toddlerGradDate: kid.toddlerGradDate ? kid.toddlerGradDate.toISOString() : null
        }));
        localStorage.setItem('kids', JSON.stringify(kidsToSave));
    }, [kids]);

    const editKid = (id, key, value) => {
        if(key == "name"){
            console.log("setting name")
            setKids(prevKids => prevKids.map(kid => 
                kid.id === id ? { ...kid, [key]: value } : kid
            ));
        } else {
            setKids(prevKids => prevKids.map(kid => 
                kid.id === id ? { ...kid, [key]: new Date(value) } : kid
            ));
        }
        setEditingKid(null);
    };

    const closeModal = () => {
        setEditingKid(null);
    }
    
    const handleEdit = (kid) => {
        setEditingKid(kid);
    };

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
        setEnrollDate(new Date(formattedDate.setFullYear(formattedDate.getFullYear())).toISOString().split('T')[0]);
        setInfantDate(new Date(formattedDate.setFullYear(formattedDate.getFullYear() + 1)).toISOString().split('T')[0]);
        setWaddlerDate(new Date(formattedDate.setFullYear(formattedDate.getFullYear() + 1)).toISOString().split('T')[0]);
        setToddlerDate(new Date(formattedDate.setFullYear(formattedDate.getFullYear() + 1)).toISOString().split('T')[0]);
    };

    const handleEnrollDate = (e) => {
        setEnrollDate(e.target.value);
    }

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
                if(currentDate >= 0 && currentDate < kid.infantGradDate && daysSinceBirth >= 0 && currentDate > kid.enrollDate){
                    isInfant = true;
                } else if (currentDate >= kid.infantGradDate && currentDate < kid.waddlerGradDate){
                    isWaddler = true;
                } else if (currentDate >= kid.waddlerGradDate && currentDate < kid.toddlerGradDate){
                    isToddler = true;
                }
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
                        Class Calculator
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
                        <div>Enrollment date</div>
                        <input type="date" name="iday" id="eday" value={enrollDate} onChange={handleEnrollDate} />
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
                        <span className="kid-date">Birth date: {formatDate(kid.date)}</span>
                        <span className="kid-date">Enrollment date: {formatDate(kid.enrollDate)}</span>
                        <span className="kid-date">Infant grad date: {formatDate(kid.infantGradDate)}</span>
                        <span className="kid-date">Waddler grad date: {formatDate(kid.waddlerGradDate)}</span>
                        <span className="kid-date">Toddler grad date: {formatDate(kid.toddlerGradDate)}</span>
                        <button type="button" className="edit-btn" onClick={() => handleEdit(kid)}>Edit</button>
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
                <p>NOTE: Data is stored locally. So if you use the same computer, the same kids entered will be saved between sessions. If you use a different computer though, your entries will not be saved.</p>
            </div>
            {editingKid && <EditModal kid={editingKid} editFunction={editKid} close={closeModal}/>}
        </div>
    );
}

// Render your React component
const root = createRoot(document.getElementById('app'));
root.render(<ClassCalc />);
