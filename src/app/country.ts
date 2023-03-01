export class Country
{
    countryID:number|any;
    countryName:string|any;

    constructor(countryIDParam:number,countryNameParam:string)
    {
        this.countryID = countryIDParam;
        this.countryName = countryNameParam;
    }

}
