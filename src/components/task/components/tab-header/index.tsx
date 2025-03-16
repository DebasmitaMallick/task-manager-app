import CustomBtn from "../../../CustomBtn";
import SearchBar from "./SearchBar";
import SelectBtn from "./SelectBtn";
import { useFilters } from "../../../../context/filterContext";

const TabHeader = () => {
  const {categories, listFilters : {category, dueDate}, handleListFilterChange } = useFilters();

  return (
    <div className="tab-header flex justify-between">
      <div id="filters" className="flex gap-2 items-center">
        <div className="text-lg text-stone-500 font-medium">Filter by:</div>
        <SelectBtn options={categories} value={category} onFilterChange={handleListFilterChange} defaultVal="Category" />
        <SelectBtn options={[""]} value={dueDate} onFilterChange={handleListFilterChange} defaultVal="Due Date" />
      </div>
      <div className="flex gap-3">
        <SearchBar />
        <CustomBtn title="ADD TASK" color="#7B1984" onClickAction={() => {}} />
      </div>
    </div>
  );
};

export default TabHeader;
