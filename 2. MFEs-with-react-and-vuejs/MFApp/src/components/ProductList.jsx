import React, { lazy, Suspense, useEffect, useRef } from "react";
const TodoApp = lazy(() => import("TodoAppHost/TodoApp"));

// Wrapper component to mount the new Vue button
const NewVueButtonWrapper = () => {
  const ref = useRef(null);

  useEffect(() => {
    const loadAndMountVueButton = async () => {
      try {
        // Dynamically import the Vue component module
        const vueButtonModule = await import("VueAppHost/NewVueButton");
        const VueButtonComponent = vueButtonModule.default; // .default is common for Vue components

        if (ref.current && VueButtonComponent && window.Vue) {
          // Check if Vue is available
          // Create a new Vue instance with the imported component and mount it
          new window.Vue({
            render: (h) => h(VueButtonComponent),
          }).$mount(ref.current);
        } else if (!window.Vue) {
          console.error("Vue is not available globally. Cannot mount NewVueButton.");
        }
      } catch (error) {
        console.error("Failed to load or mount NewVueButton:", error);
      }
    };

    loadAndMountVueButton();

    // Optional: Cleanup function to unmount the Vue component when the wrapper unmounts
    return () => {
      if (ref.current && ref.current.innerHTML) {
        // Simple cleanup. For more complex Vue apps, you might call a specific unmount method.
        ref.current.innerHTML = "";
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount

  // The div where the Vue component will be mounted
  return <div ref={ref} />;
};

const ProductList = () => {
  return (
    <div className="todo-list-container">
      <Suspense fallback={<div>Loading Todo App...</div>}>
        <TodoApp />
      </Suspense>
      <hr style={{ margin: "20px 0" }} />
      <h2>New Vue Button in React:</h2>
      <Suspense fallback={<div>Loading Vue Button...</div>}>
        <NewVueButtonWrapper />
      </Suspense>
    </div>
  );
};

export default ProductList;
