import { Component } from "@angular/core";
import { BaseComponent } from "../base.component";
import { HelloWorldEntity } from "./hello-world-entity";

@Component({
    templateUrl: "hello-world.component.html",
    selector: "app-hello"
})
export class HelloWorldComponent extends BaseComponent<HelloWorldEntity> {

}