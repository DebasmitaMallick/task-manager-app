import { SelectChangeEvent } from "@mui/material";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from "react";

const STATUSES = ["TO-DO", "IN-PROGRESS", "COMPLETED"];
const CATEGORIES = ["WORK", "PERSONAL"];

interface FilterType {
  category: (typeof CATEGORIES)[number] | "";
  dueDate: "";
}

const DEFAULT_FILTERS: FilterType = {
  category: "",
  dueDate: "",
};

interface FilterContextType {
  categories: typeof CATEGORIES;
  statuses: typeof STATUSES;
  listFilters: FilterType;
  boardFilters: FilterType;
  handleListFilterChange: (type: string, e: SelectChangeEvent) => unknown;
  handleBoardFilterChange: (type: string, e: SelectChangeEvent) => unknown;
}

const FilterContext = createContext<FilterContextType>({
  categories: CATEGORIES,
  statuses: STATUSES,
  listFilters: DEFAULT_FILTERS,
  boardFilters: DEFAULT_FILTERS,
  handleListFilterChange: () => {},
  handleBoardFilterChange: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useFilters = () => useContext(FilterContext);

const FilterProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [listFilters, setListFilters] = useState(DEFAULT_FILTERS);

  const [boardFilters, setBoardFilters] = useState(DEFAULT_FILTERS);

  const handleListFilterChange = (type: string, e: SelectChangeEvent) => {
    setListFilters((prev) => ({
      ...prev,
      [type]: e.target.value,
    }));
  };

  const handleBoardFilterChange = (type: string, e: SelectChangeEvent) => {
    setBoardFilters((prev) => ({
      ...prev,
      [type]: e.target.value,
    }));
  };

  return (
    <FilterContext.Provider
      value={{
        categories: CATEGORIES,
        statuses: STATUSES,
        listFilters,
        boardFilters,
        handleListFilterChange,
        handleBoardFilterChange,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
