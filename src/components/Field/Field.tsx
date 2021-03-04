import React, {FC, KeyboardEvent} from 'react';
import { TextArea } from './Styled';

export interface FieldProps {
    clicked?: boolean;
    children?: React.ReactNode;
    onClick: () => void;
}

export interface StyledProps {
    isClicked: boolean | undefined;
}


export const Field: FC<FieldProps> = ({
    clicked,
    onClick,
    children
}) => {
    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        (e.target as HTMLTextAreaElement).style.height = '50px';
        (e.target as HTMLTextAreaElement).style.height = `${(e.target as HTMLTextAreaElement).scrollHeight}px`;
    }

    return (
        <TextArea onClick={onClick} isClicked={clicked} placeholder={"Write a new task"} onKeyDown={handleKeyDown}>
            {children}
        </TextArea>
    )
};

Field.displayName = 'Field';