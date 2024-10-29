import React, { useState, useMemo } from 'react';
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

    const [kids, setKids] = useState([]);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [year, setYear] = useState(2024);
    const [id, setId] = useState(0);

    const addKid = () => {
        const kidDate = new Date(date);
        if (name && date) {
            setKids([...kids, { id, name, date: kidDate }]);
            setId(id + 1);
            setName("");
            setDate("");
        }
    };

    const removeKid = (id) => {
        setKids(kids.filter(kid => kid.id !== id));
    };

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleDate = (e) => {
        setDate(e.target.value);
    };

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
                const daysDifference = Math.floor((currentDate - kid.date) / (1000 * 60 * 60 * 24));
                if (daysDifference < 365 && daysDifference > 0) {
                    infants.push(kid.name);
                } else if (daysDifference >= 365 && daysDifference < 730) {
                    waddlers.push(kid.name);
                } else if (daysDifference >= 730) {
                    toddlers.push(kid.name);
                }
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
                <div className="laurel">Laurel's Class Calculator</div>
                <div>Made with love by Anthony</div>
            </div>
            <div className="input">
                <div className="controls">
                    <input type="text" name="kid" id="kid" placeholder="Name" value={name} onChange={handleName} />
                    <input type="date" name="bday" id="bday" value={date} onChange={handleDate} />
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
                        <span className="kid-date">{kid.date.toDateString()}</span>
                        <button type="button" className="remove-btn" onClick={() => removeKid(kid.id)}>X</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Render your React component
const root = createRoot(document.getElementById('app'));
root.render(<Laurel />);
