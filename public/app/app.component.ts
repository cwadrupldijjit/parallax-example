import { Component } from 'angular2/core';
import { Parallax, ParallaxConfig } from 'ng2-parallax/parallax-ts';

@Component({
    selector: 'app',
    templateUrl : '/app/app.template.html',
    directives: [
        Parallax
    ]
})
class AppComponent {
    // config: ParallaxConfig = {
        
    // };
}

export { AppComponent };