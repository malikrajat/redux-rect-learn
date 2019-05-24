import React from 'react';

const List = props => {
    console.log(props.allList);
       return props.allList.map(
                res => {
                    return <div key={res.id}> {res.title}</div>
                }
            )
        
}
export default List;