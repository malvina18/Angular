import { Component, OnInit } from '@angular/core';
import { TypesService } from 'src/app/servicios/types.service';
import { Pettype } from 'src/app/models/pettype';
import { Router } from '@angular/router';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  public types: Array<Pettype>;
  
  constructor(private servicioTypes: TypesService, private ruta: Router) { }

  ngOnInit() {
    this.servicioTypes.getPet().subscribe(res=>{
      this.types = res;
      console.log(res);
  })
}

del(types: Pettype){
  console.log(types);
  const msg = "¿Estas seguro/a que desea borrar a " + types.name +  "?";
  if(confirm(msg)){
    this.servicioTypes.delTypesList(types.id).subscribe(res=>{

      this.servicioTypes.getPet().subscribe(res=>{
        this.types = res;
        console.log(res);
    })
    
      console.log(res);
    })
  }

}

mod(typesId){
  console.log(typesId);
  this.ruta.navigate(["types-add", typesId]);
}

}
