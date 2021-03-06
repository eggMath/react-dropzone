import * as React from "react";

export interface FileWithPreview extends File {
  preview?: string;
}

export type DropFileEventHandler = (
  acceptedOrRejected: FileWithPreview[],
  event: React.DragEvent<HTMLDivElement>
) => void;
export type DropFilesEventHandler = (
  accepted: FileWithPreview[],
  rejected: FileWithPreview[],
  event: React.DragEvent<HTMLDivElement>
) => void;

type DropzoneRenderArgs = {
  draggedFiles: FileWithPreview[];
  acceptedFiles: FileWithPreview[];
  rejectedFiles: FileWithPreview[];
  isDragActive: boolean;
  isDragAccept: boolean;
  isDragReject: boolean;
  open: () => void;
};

export type DropzoneRenderFunction = (x: DropzoneRenderArgs) => JSX.Element;

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export type DropzoneProps = Omit<React.HTMLProps<HTMLDivElement>, "onDrop" | "ref"> & {
  disableClick?: boolean;
  disabled?: boolean;
  disablePreview?: boolean;
  preventDropOnDocument?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  maxSize?: number;
  minSize?: number;
  activeClassName?: string;
  acceptClassName?: string;
  rejectClassName?: string;
  disabledClassName?: string;
  activeStyle?: React.CSSProperties;
  acceptStyle?: React.CSSProperties;
  rejectStyle?: React.CSSProperties;
  disabledStyle?: React.CSSProperties;
  onDrop?: DropFilesEventHandler;
  onDropAccepted?: DropFileEventHandler;
  onDropRejected?: DropFileEventHandler;
  onFileDialogCancel?(): void;
  getDataTransferItems?(event: React.DragEvent<HTMLDivElement> | DragEvent | React.ChangeEvent<HTMLInputElement> | Event): Promise<Array<File | DataTransferItem>>;
  children?: React.ReactNode | DropzoneRenderFunction;
  ref?: React.Ref<Dropzone>;
};

export default class Dropzone extends React.Component<DropzoneProps> {
  open: () => void;
}
