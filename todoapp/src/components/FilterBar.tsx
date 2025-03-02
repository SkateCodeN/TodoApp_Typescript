import React from "react";

interface PropsType{
    currentFilter: string,
    onFilterChange: (newFilter: string) => void 
    
}
const FilterBar: React.FC<PropsType> = ({ currentFilter,onFilterChange}) =>{

    return(
        <div style={styles.filterContainer} >
            <h5>Filters</h5>
                <ul style={styles.removeDeco}>
                    <li>
                        <button 
                            type="button"
                            style={currentFilter === "all" ? styles.activeButton: undefined}
                            onClick={() => onFilterChange("all")}
                        >
                            A
                        </button>
                    </li>
                    <li>
                        <button 
                            type="button"
                            style={currentFilter === "active" ? styles.activeButton: undefined}
                            onClick={() => onFilterChange("active")}
                        >
                            Ac
                        </button>
                    </li>
                    <li>
                        <button 
                            type="button"
                            style={currentFilter === "completed" ? styles.activeButton: undefined}
                            onClick={() => onFilterChange("completed")}
                        >
                            C
                        </button>
                    </li>
                </ul>
        </div>
    )
}

const styles ={
    removeDeco: {
        display:"flex",
        gap:"10px",
        justifyContent:"center",
        listStyleType:"none"
    },
    filterContainer:{
        display:"flex",
        gap:"5px",
       alignItems:"center"
    },
    activeButton:{
        fontWeight:"bold",
        textDecoration:"underline",
        backgroundColor:"blue",
        
    }
}
export default FilterBar;