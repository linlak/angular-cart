export interface Assignie {
    userId: string;
}
export interface TaskStatus {
    column: BoardType;
    dropedOn: string;
}
export type BoardType = 'IK_TODO' | 'IK_COMPLETED' | 'IK_PROGRESS';
export interface Task {
    id: number;
    guid: string;
    boardId: BoardType;
    description: string;
    name: string;
    dueDate: string;
    startDate: string;
    createdOn: string;
    columnIndex: number;
    isDraggable: boolean;
    assignies: Assignie[];
    columnStatus?: TaskStatus[];
}
