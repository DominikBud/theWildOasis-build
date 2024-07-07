import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

import SortBy from "../../ui/SortBy";
function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filteredField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "(A-Z)" },
          { value: "name-desc", label: "(Z-A)" },
          { value: "regularPrice-asc", label: "price low to high" },
          { value: "regularPrice-desc", label: "price high to low" },
          { value: "maxCapacity-asc", label: "capacity low to high" },
          { value: "maxCapacity-desc", label: "capacity high to low" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
