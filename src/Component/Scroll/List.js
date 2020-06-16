import React, {useState, useEffect} from "react";
import styled from "styled-components";

const List = () => {
    const [listItems, setListItems] = useState(Array.from(Array(30).keys(), n => n+1 ));
    const [isFetching, setIsFetching] = useState(false);

     useEffect(()=> {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener ('scroll', handleScroll);
     }, []);

     useEffect (()=>{
         if (!isFetching) return;
         fetchMoreListItems();
     }, [isFetching])

     function handleScroll () {
        if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setIsFetching(true);
    }

    function fetchMoreListItems(){
        setTimeout(() =>{
            setListItems (prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length +1)]));
            setIsFetching(false);
        }, 2000);
    }
    
    
    return(
        <>
            <ListGroupUl>
                {listItems.map(listItem => 
                <ListItemLi>
                    List Item{listItem}
                </ListItemLi>)}
            </ListGroupUl>
            {isFetching && 'Fetching more list items...'}
        </>

    );
};
export default List;

const ListGroupUl = styled.div``;

const ListItemLi = styled.div``;
