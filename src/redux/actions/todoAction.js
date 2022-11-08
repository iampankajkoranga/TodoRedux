export const Add_Task="Add_Task"
export const Delete_Task="Delete_Task"
export const Edit_Task="Edit_Task"


export const add=(data, type)=>{
    return{
        type:Add_Task,
        payload: {[type]:data},
    };

};

export const del=(data, type)=>{
    return{
        type:Delete_Task,
        payload: {[type]:data},
    };
};

export const editTask=(data, type)=>{
    return{
        type:Edit_Task,
        payload: {[type]:data},
    };
};

