import { CreateButton } from "@/components/refine-ui/buttons/create";
import { Breadcrumb } from "@/components/refine-ui/layout/breadcrumb";
import { ListView } from "@/components/refine-ui/views/list-view";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DEPARTMENT_OPTIONS } from "@/constants";
import { Search } from "lucide-react";
import { useState } from "react";
const SubjectList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartments, setSelectedDepartment] = useState('all');

  return (
    <ListView>
      <Breadcrumb />
      <h1 className="page-title">Subjects</h1>

    <div className="intro-row">
      <p>Quick access to essential merics and management tools.</p>
    </div>

    <div className="actions-row">
      <div className="relative flex items-center w-full sm:w-72">
        <Search className="absolute left-3 size-4 text-muted-foreground" />
        <input type="text"
               placeholder="Search by name..."
               className="w-full rounded-md border border-input bg-background py-2 pl-9 pr-4 text-sm shadow-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring placeholder:text-muted-foreground"
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex gap-2 w-full sm:w-auto">
        <Select 
            value={selectedDepartments}
                onValueChange={setSelectedDepartment}
        >
            <SelectTrigger>
              <SelectValue placeholder="Filter by department=Filter by department" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">
                All Departments
              </SelectItem>
              {DEPARTMENT_OPTIONS.map((department) => (
                <SelectItem key={department.value} 
                  value={department.value}>
               {department.label}
                </SelectItem>
              ))}
            </SelectContent>
        </Select>

      <CreateButton/>
              
      </div>
      </div>
    </ListView>
   
  )
}

export default SubjectList;