export class Result{

    hasError: boolean;
    errors: Array<any>;
    object: any;

    constructor(hasError: boolean, errors: Array<any>, object: any){
        this.hasError = hasError;
        this.errors = errors;
        this.object = object;
    }

}