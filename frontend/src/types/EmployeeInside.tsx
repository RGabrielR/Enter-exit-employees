import type { Employee } from './Employee';

export interface EmployeeInside extends Employee {
  selectedTimestamp: string;
}
