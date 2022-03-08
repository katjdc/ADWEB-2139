import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product:boolean=true;
  notproduct:boolean=false;

  Products = [
    {
      id: "SHL0001",
      name: "T-shirt",
      description: "Discover t-shirts that perfectly fit your style! Stay cozy, casual, classic or cool.",
      source: "../../assets/images/tshirt.jpg"
    },
    {
      id: "SHL0002",
      name: "Crop Tops",
      description: "Crop tops are an absolute love for all women who want to have timeless and elegant trends.",
      source: "../../assets/images/croptops.jpg"
    },
    {
      id: "SHL0003",
      name: "Jeans",
      description: "Everyday jeans designed with unbelievable softness and just the right amount of stretch.",
      source: "../../assets/images/jeans.jpg"
    },
    {
      id: "SHL0004",
      name: "Shoes",
      description: "The right pair of shoes will make you feel amazing, and this shoe-sandals combo will pair with all your casual looks.",
      source: "../../assets/images/shoes.jpg"
    },
    {
      id: "SHL0005",
      name: "Sandals",
      description: "The right pair of sandals will make your feet ‘oh so comfortable’ as soon as you put them on.",
      source: "../../assets/images/sandals.jpg"
    },
    {
      id: "SHL0006",
      name: "Shoulder Bags",
      description: "Unstructured fabric shoulder bag that can either be worn parallel to your body, or across it.",
      source: "../../assets/images/shoulderbags.jpg"
    },
    {
      id: "SHL0007",
      name: "Bags",
      description: "Made of 100% natural material and can be used for your everyday life of travel.",
      source: "../../assets/images/bags.jpg"
    },
    {
      id: "SHL0008",
      name: "Watches",
      description: "Commuter mugs feature a rubber-lined lid for a tight, spill-resistant seal, twist the lid to reveal the sip opening",
      source: "../../assets/images/watches.jpg"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
