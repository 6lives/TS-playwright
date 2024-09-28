

export type SignUpField = {
    label: string
    value: string | number
    type: SignUpFieldType
}

export enum SignUpFieldType {
    STRING = 'string',
    SELECT = 'select'
}