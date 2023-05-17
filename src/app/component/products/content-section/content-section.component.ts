import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { DiscountOffers } from 'src/app/models/discount-offers';
import { IProduct } from 'src/app/models/iproduct';
import { Store } from 'src/app/models/store';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss'],
})

//day 1
// export class ContentSectionComponent {
//   //1
//   Discount: DiscountOffers = DiscountOffers['15%'];
//   //2
//   adidas: Store = new Store(
//     'adidas',
//     ['Cairo', 'Giza', 'Sohag', 'Qina'],
//     'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png'
//   );
//   //3
//   clientName: string = '';
//   //4
//   product1: IProduct = {
//     id: 5,
//     name: 'shoes',
//     quantity: 2,
//     price: 2749,
//     image:
//       'https://assets.adidas.com/images/w_450,f_auto,q_auto/aa048bf416664f588de3ad6600ac438f_9366/GW8336_00_plp_standard.jpg',
//     cateogryID: 3,
//   };
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//day 2
export class ContentSectionComponent implements OnInit {
  clientName: string = 'NoobMaster69';

  showLogo: Boolean = true;

  // productsList: IProduct[];
  constructor(private protductsService: ProductsService, private router:Router) {
    // this.productsList = [
    //   //cateogrys 1=> Slides 2=> Basketball 3=> Walking 4=>Football 5=> Tennis 6=> Running 7=> Lifestyle
    //   {
    //     id: 1,
    //     name: 'Nike Air Max Pulse',
    //     quantity: 10,
    //     price: 150,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fc1ac524-05f5-4273-8281-6031f63851a2/air-max-pulse-mens-shoes-ShS3tL.png',
    //     cateogryID: 7,
    //   },
    //   {
    //     id: 2,
    //     name: 'Nike Dunk High Retro',
    //     quantity: 7,
    //     price: 125,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e7687f1-c13e-4bac-8ffa-a6f863ae9157/dunk-high-retro-mens-shoe-dTVTCk.png',
    //     cateogryID: 7,
    //   },
    //   {
    //     id: 3,
    //     name: 'Nike Air Max 270',
    //     quantity: 3,
    //     price: 160,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/awjogtdnqxniqqk0wpgf/air-max-270-mens-shoes-KkLcGR.png',
    //     cateogryID: 7,
    //   },
    //   {
    //     id: 4,
    //     name: "Nike Blazer Low '77 Premium",
    //     quantity: 8,
    //     price: 95,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/34133bc1-d861-4319-8037-76bb1cce5f41/blazer-low-77-premium-mens-shoes-9GkV70.png',
    //     cateogryID: 7,
    //   },
    //   {
    //     id: 5,
    //     name: 'Air Jordan 6 Retro',
    //     quantity: 1,
    //     price: 200,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/af407608-9bbd-4140-8f5a-e1a24284574d/air-jordan-6-retro-mens-shoes-CVPFVM.png',
    //     cateogryID: 7,
    //     discount: DiscountOffers['50%'],
    //   },
    //   {
    //     id: 6,
    //     name: 'Converse Chuck Taylor All Star High Top',
    //     quantity: 2,
    //     price: 65,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/toqshuuheqdl3ljzobnc/converse-chuck-taylor-all-star-high-top-unisex-shoes-xX439O.png',
    //     cateogryID: 7,
    //   },
    //   {
    //     id: 7,
    //     name: 'Nike Invincible 3',
    //     quantity: 4,
    //     price: 180,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-mens-road-running-shoes-Xrd0px.png',
    //     cateogryID: 6,
    //   },
    //   {
    //     id: 8,
    //     name: 'Nike React Infinity 3',
    //     quantity: 6,
    //     price: 160,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bac37b3a-4a82-4d7e-a0ef-69000ce91066/react-infinity-3-mens-road-running-shoes-1bRq75.png',
    //     cateogryID: 6,
    //   },
    //   {
    //     id: 9,
    //     name: 'Nike Free Run 2018',
    //     quantity: 5,
    //     price: 120,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/zf6zoyxo4wzsjwxwxen1/free-run-2018-mens-road-running-shoes-RRT9elMk.png',
    //     cateogryID: 6,
    //   },
    //   {
    //     id: 10,
    //     name: 'Nike Air Zoom Maxfly',
    //     quantity: 10,
    //     price: 180,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ece02293-a75b-4357-8a89-c25993ffa32e/air-zoom-maxfly-track-field-sprinting-spikes-C2ZBRP.png',
    //     cateogryID: 6,
    //     discount: DiscountOffers['50%'],
    //   },
    //   {
    //     id: 11,
    //     name: 'Nike Blazer Mid Pro Club',
    //     quantity: 4,
    //     price: 115,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9697cfeb-58d5-4e91-8b54-072400ac58d7/blazer-mid-pro-club-mens-shoes-Vgslvc.png',
    //     cateogryID: 5,
    //   },
    //   {
    //     id: 12,
    //     name: 'Nike Court Legacy Canvas',
    //     quantity: 0,
    //     price: 65,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b32badb9-a037-4a1a-bdc9-42dab5693c90/court-legacy-canvas-mens-shoes-0m3bG0.png',
    //     cateogryID: 5,
    //   },
    //   {
    //     id: 13,
    //     name: 'NikeCourt Air Zoom Lite 3',
    //     quantity: 1,
    //     price: 70,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6e169cb3-a6a2-4f28-9dd5-3db09065aa3a/nikecourt-air-zoom-lite-3-mens-tennis-shoes-zZtV5H.png',
    //     cateogryID: 5,
    //   },
    //   {
    //     id: 14,
    //     name: 'NikeCourt Zoom Vapor Cage 4 Rafa',
    //     quantity: 5,
    //     price: 150,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9e68ed47-b67c-4251-89ec-58a2df9a06ef/nikecourt-zoom-vapor-cage-4-rafa-mens-hard-court-tennis-shoes-dMxMqL.png',
    //     cateogryID: 5,
    //   },
    //   {
    //     id: 15,
    //     name: 'Nike Alpha Menace Elite 3 RW',
    //     quantity: 9,
    //     price: 200,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c7eb500d-0b8b-4cc6-a100-cffe9758508c/alpha-menace-elite-3-rw-mens-football-cleats-8MmB7M.png',
    //     cateogryID: 4,
    //   },
    //   {
    //     id: 16,
    //     name: 'Nike Vapor Edge Elite 360 2',
    //     quantity: 7,
    //     price: 200,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/04664da2-06cd-4dc6-94d3-f4b6909f5f84/vapor-edge-elite-360-2-mens-football-cleats-LdsghK.png',
    //     cateogryID: 4,
    //     discount: DiscountOffers['50%'],
    //   },
    //   {
    //     id: 17,
    //     name: 'Nike Vapor Edge Pro 360 2',
    //     quantity: 1,
    //     price: 125,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d41328a6-d115-46f6-ad70-29767d3c91fa/vapor-edge-pro-360-2-mens-football-cleats-WkQJFN.png',
    //     cateogryID: 4,
    //     discount: DiscountOffers['25%'],
    //   },
    //   {
    //     id: 18,
    //     name: 'Nike Vapor Edge Speed 360 2',
    //     quantity: 0,
    //     price: 100,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d7762530-95fd-40ff-b77d-3e3439b26802/vapor-edge-speed-360-2-mens-football-cleats-zMJmjT.png',
    //     cateogryID: 4,
    //   },
    //   {
    //     id: 19,
    //     name: 'Nike Free Metcon 5',
    //     quantity: 3,
    //     price: 120,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/31061aae-1018-4321-b1f0-d689e8a9b44c/free-metcon-5-mens-training-shoes-Vfsbpq.png',
    //     cateogryID: 4,
    //   },
    //   {
    //     id: 20,
    //     name: 'Nike Free Run 5.0',
    //     quantity: 10,
    //     price: 100,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c116bad8-57c0-4142-b44b-89376ff0b4e9/free-run-5-mens-road-running-shoes-Xp40hf.png',
    //     cateogryID: 3,
    //   },
    //   {
    //     id: 21,
    //     name: 'Nike Air Monarch IV',
    //     quantity: 8,
    //     price: 75,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d43b949c-246a-4964-8a5c-23f354a4e542/air-monarch-iv-mens-training-shoes-FZwDht.png',
    //     cateogryID: 3,
    //     discount: DiscountOffers['10%'],
    //   },
    //   {
    //     id: 22,
    //     name: 'Nike Free Run 2018',
    //     quantity: 7,
    //     price: 120,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/zf6zoyxo4wzsjwxwxen1/free-run-2018-mens-road-running-shoes-RRT9elMk.png',
    //     cateogryID: 3,
    //   },
    //   {
    //     id: 23,
    //     name: 'Nike Renew Ride 3',
    //     quantity: 6,
    //     price: 80,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2f80ed5d-d988-49b0-b2a0-96e2081655fa/renew-ride-3-mens-road-running-shoes-7hTSLw.png',
    //     cateogryID: 3,
    //   },
    //   {
    //     id: 24,
    //     name: 'Nike Spark Flyknit',
    //     quantity: 9,
    //     price: 185,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c88ad446-f0a5-407c-8ea0-e1451acd4f3f/spark-flyknit-mens-shoes-m3gDft.png',
    //     cateogryID: 3,
    //   },
    //   {
    //     id: 25,
    //     name: 'KD15 "What The"',
    //     quantity: 1,
    //     price: 150,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b5592ce9-b68b-4ecd-a45f-25c98da29ef3/kd15-what-the-basketball-shoes-10P3rj.png',
    //     cateogryID: 2,
    //   },
    //   {
    //     id: 26,
    //     name: 'Cosmic Unity 3',
    //     quantity: 7,
    //     price: 160,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7ae8c65-4345-4c8c-9b25-2dd4add1ed0d/cosmic-unity-3-basketball-shoes-0zGs9z.png',
    //     cateogryID: 2,
    //   },
    //   {
    //     id: 27,
    //     name: 'Nike G.T. Cut 2 "Devin Booker"',
    //     quantity: 10,
    //     price: 170,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/58d59f88-9eeb-44c8-8ffe-0eede1ce66e2/gt-cut-2-devin-booker-mens-basketball-shoes-tmfmFl.png',
    //     cateogryID: 2,
    //   },
    //   {
    //     id: 28,
    //     name: 'Luka 1',
    //     quantity: 8,
    //     price: 110,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4fbfd17c-2d0e-4bca-ba4c-d95e2a864322/luka-1-basketball-shoes-69X9Vs.png',
    //     cateogryID: 2,
    //   },
    //   {
    //     id: 29,
    //     name: 'Nike Air Zoom G.T. Jump',
    //     quantity: 10,
    //     price: 180,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d213fc95-e68b-4d13-8588-2c3272c95b4b/air-zoom-gt-jump-basketball-shoes-Mj4kHp.png',
    //     cateogryID: 2,
    //   },
    //   {
    //     id: 30,
    //     name: 'Nike Oneonta',
    //     quantity: 10,
    //     price: 70,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c68de833-d451-45a3-8a8d-d26dc943ed0d/oneonta-mens-sandals-cZdl5F.png',
    //     cateogryID: 1,
    //   },
    //   {
    //     id: 31,
    //     name: 'Nike Asuna 2',
    //     quantity: 0,
    //     price: 50,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/52c60e2e-c673-4769-b0be-a6c86f570a12/asuna-2-mens-slides-8ZN47w.png',
    //     cateogryID: 1,
    //   },
    //   {
    //     id: 32,
    //     name: 'ACG Air Deschutz+',
    //     quantity: 10,
    //     price: 80,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7d130043-05aa-4b01-8bae-fb7675d35eae/acg-air-deschutz-sandals-WtcmP1.png',
    //     cateogryID: 1,
    //   },
    //   {
    //     id: 33,
    //     name: 'Jordan Hydro 4 Retro',
    //     quantity: 5,
    //     price: 65,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/df21e911-1071-4faa-8e73-c547224bcf2e/jordan-hydro-4-retro-mens-slides-NeVOzO.png',
    //     cateogryID: 1,
    //   },
    //   {
    //     id: 34,
    //     name: 'Nike On Deck',
    //     quantity: 1,
    //     price: 25,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3749ee78-a00c-4556-a323-984b08e6b384/on-deck-mens-slides-McrHWg.png',
    //     cateogryID: 1,
    //   },
    //   {
    //     id: 35,
    //     name: 'Nike Offcourt (Oklahoma State)',
    //     quantity: 10,
    //     price: 40,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/18a3ad53-57ec-421c-81ae-61d59106c9d3/offcourt-oklahoma-state-slide-Hst70j.png',
    //     cateogryID: 1,
    //   },
    //   {
    //     id: 36,
    //     name: "Nike Air Force 1 '07",
    //     quantity: 10,
    //     price: 110,
    //     image:
    //       'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d762c5e2-ae49-4208-99df-484594b51e5f/air-force-1-07-mens-shoes-jBrhbr.png',
    //     cateogryID: 1,
    //   },
    // ];
  }

  toggle() {
    this.showLogo = !this.showLogo;
  }

  ngOnInit(): void {
    this.filterdProducts = this.protductsService.productsList;
  }

  private _childListFilter: string = '';

  filterdProducts: IProduct[] = [];

  @Input() get childListFilter(): string {
    return this._childListFilter;
  }

  set childListFilter(value: string) {
    this._childListFilter = value;
    this.filterdProducts = this.protductsService.theFilter(value);
  }

  private _childCateogryFilter!: number;

  categoriesedProducts: IProduct[] = [];

  @Input() get childCateogryFilter(): number {
    return this._childCateogryFilter;
  }

  set childCateogryFilter(value: number) {
    this._childCateogryFilter = value;
    if (value == 0) {
      this.filterdProducts = this.protductsService.productsList;
    } else {
      this.filterdProducts = this.protductsService.filterByCateogrys(value);
    }
  }

  BuyFunc(product: IProduct) {
    product.quantity--;
  }

  public theNum: string = '1234567890123456';

  // day3
  private _childPriceFilter!: number;
  listByPrice: IProduct[] = [];
  @Input() get childPriceFilter(): number {
    return this._childPriceFilter;
  }
  set childPriceFilter(value: number) {
    this._childPriceFilter = value;
    if (value > 0) {
      this.filterdProducts = this.protductsService.filterByPrice(value);
    } else {
      this.filterdProducts = this.protductsService.productsList;
    }
  }


  @Output() newCartProductEvent: EventEmitter<IProduct[]> = new EventEmitter<
    IProduct[]
  >();
  cartProduct: IProduct[] = [];
  cartQuantity: any[] = [
    {
      id: 0,
      quantity: 0,
    },
  ];
  @Output() newCartQuantityEvent: EventEmitter<any[]> = new EventEmitter<
    any[]
  >();
  addToCart(product: IProduct) {
    if (this.cartProduct.includes(product)) {
      this.cartQuantity.forEach((element) => {
        if (element.id == product.id) {
          element.quantity++;
        }
      });
    } else {
      this.cartProduct.push(product);
      let obj = {
        id: product.id,
        quantity: 1,
      };
      this.cartQuantity.push(obj);
    }

    this.newCartProductEvent.emit(this.cartProduct);
    this.newCartQuantityEvent.emit(this.cartQuantity);
  }

  protectedDetails(productID:number){
    this.router.navigate(['/product',productID])
  }

}
