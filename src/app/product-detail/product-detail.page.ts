import { Component, OnInit } from '@angular/core';
import { ToastController , ModalController, LoadingController, NavController} from '@ionic/angular';

export class ProductDetailModel
{
  ProductId : number;
  ProductCode : string;
  ProductName : string;
  ProductDetail : string;
  Price : number;
  Discount : number;
  Amount : number;
}

export class CartDetailModel
{
  ProductId : number;
  Amount : number;
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  public setProductDetailModel : ProductDetailModel;
  public setCartDetailModel : CartDetailModel;
  public defaultAmount : number;

  constructor(
    private toastController: ToastController,
    public loadingController: LoadingController,
  ) { 

    this.initProductDetail();
    this.initCart();
    this.defaultAmount = 1;
  }

  ngOnInit() {

  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  addToCart(id)
  {
    this.presentToast('เพิ่มสินค้าในตะกร้าแล้ว');
  }

  addToFavorite(id)
  {
    this.presentToast('เพิ่มรายการในสินค้าโปรดแล้ว');
  }

  increaseAmt(amt)
  {
    console.log(amt)
    this.setCartDetailModel.Amount+amt;
  }

  decreaseAmt(amt)
  {
    console.log(amt)
    if(this.setCartDetailModel.Amount > 0)
      this.setCartDetailModel.Amount-amt;
    else 
      this.setCartDetailModel.Amount = 0;
  }

  initProductDetail()
  {
   const productDetail = new  ProductDetailModel();
   productDetail.ProductId  = 1;
   productDetail.ProductCode = "mono-2020057721";
   productDetail.ProductName = "อาหารแมวตราแมวแอบซุ่ม Meow Mix";
   productDetail.ProductDetail = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Et molestie ac feugiat sed lectus vestibulum";
   productDetail.Discount = 456;
   productDetail.Price = 123;

   this.setProductDetailModel = productDetail;

  }

  initCart()
  {
    const cartDetail = new CartDetailModel();
    cartDetail.ProductId = 1;
    cartDetail.Amount = 0;
    this.setCartDetailModel = cartDetail;
  }


}
