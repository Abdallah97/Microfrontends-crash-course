import React, { useState, useEffect, lazy, Suspense}  from "react";
const CardDeatils = lazy(() => import("commonComponents/CardDetails"));

const FoodList = (props) => {
    const [detailItems, setDetailItems] = useState([]);

    const callbackParent = (result) => {
        props.callback(result);
    }
  
    useEffect(() => {
        fetch('https://dummyjson.com/recipes?limit=5&select=id,name,image,cuisine,rating')
        .then(res => res.json())
        .then(data => setDetailItems(data.recipes));
    }, []);

    return (
        <div className="detail-list-container">
            <Suspense fallback={<p>Loading...</p>}>
            {detailItems.length && detailItems.map(item => {
                return <CardDeatils key={item.id} data={item} callback={callbackParent}></CardDeatils>
            })}
            </Suspense>
        </div>
    )
}

export default FoodList;
