import React from "react";

interface AdminContactViewProps {
  data: any[];
}

const AdminContactView: React.FC<AdminContactViewProps> = ({data}) => {
  return (
    <div className="flex flex-col gap-5">
      {data && data.length
        ? data.map((item) => (
            <div className="p-5 border">
              <p>{item.name}</p>
              <p>{item.email}</p>
              <p>{item.message}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default AdminContactView;
