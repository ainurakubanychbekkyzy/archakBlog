import React from "react";

const render = {
  count1: 0,
  count2: 0,
};

export const Count = React.memo(({ id, value }) => {
  console.log(`🔴 Count${id} render: ${++render[`count${id}`]}`);

  return (
    <div>
      <h1 className="cyan">{value}</h1>
    </div>
  );
});
