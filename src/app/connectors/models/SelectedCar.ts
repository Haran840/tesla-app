
import { Color } from "./Color";
import { Config } from "./Config";
import { Model } from "./Model";

export class SelectedCar{
    model?:Model = undefined;
    color?:Color= undefined;
    config?: Config= undefined;
    tow: boolean =false;
    yoke: boolean =false;

    configNotSelected():boolean
    {
        if(this.config){
            return false;
        }
        return true;
    }

    colorAndModelNotSelected(): boolean
    {
        if(this.model && this.color){
            return false;
        }
        return true;
    }

    getTotalCost():number{
        var towYokeCost=1000;
        var sum=(this.color?.price ?? 0)+(this.config?.price ?? 0);
        if(this.tow) sum += towYokeCost;
        if(this.yoke) sum += towYokeCost;
        return sum;
    }

}