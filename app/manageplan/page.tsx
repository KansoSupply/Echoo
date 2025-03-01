import SchematicComponent from "@/components/schematic/SchematicComponent";
import React from "react";

function ManagePlan() {
  return (
    <>
      <section className="flex flex-col w-full justify-center">
        <div className="my-8 p-8 flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-center">Manage Your Plan</h1>
          <p className="text-center text-xl font-medium">
            This is the hero section for managing your plan.
          </p>
          <SchematicComponent componentId="cmpn_Czd1JK4Fpkd" />
        </div>
      </section>
    </>
  );
}

export default ManagePlan;
