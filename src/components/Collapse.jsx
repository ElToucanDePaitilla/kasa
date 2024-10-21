import React, { useState, useEffect } from 'react';
import CollapseItem from './CollapseItem';
import '../styles/components/_collapse.scss'; 
import collapsesData from '../datas/collapses-text.json'; // Importer les données JSON

const Collapse = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Charger les données du fichier JSON
        setData(collapsesData);
    }, []);

    return (
        <div>
            <section className="content">
                {data.map((item) => (
                    <CollapseItem key={item.id} title={item.title} content={[item.content]} />
                ))}
            </section>
        </div>
    );
};

export default Collapse;
