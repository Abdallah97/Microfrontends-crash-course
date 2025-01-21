import React, {lazy, Suspense} from "react";
const TodoApp = lazy(() => import("TodoAppHost/TodoApp"));

const ToDoList = () => {
    return (
        <div className="todo-list-container">
            <Suspense fallback={null}>
            <TodoApp />
            </Suspense>
        </div>
    )
}

export default ToDoList;
