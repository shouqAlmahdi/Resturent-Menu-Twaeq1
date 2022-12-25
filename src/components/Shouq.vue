<template> 
<div class="container" style="font-family:Cairo">
  <div class="row">
  <div class="col alert alert-warning text-center m-3">
  <h2 style="font-family:Cairo"><strong> The total: </strong>{{total}}</h2>
  </div>
  </div>
  <div class="row p-2">
    <div class="col bg-success  text-white">
      <div class="alert alert-warning text-center p-2 m-2"><h3>New Items</h3></div>
      <div class="d-flex justify-content-between">
        <div class="p-2">
          <input type="checkbox"  @change="GetTotal(32)"/>
        </div>
        <div class="p-2">
          <h4>{{Borger}}</h4>
        </div>
        <div class="p-2">
          <h4>Burger</h4>
          <img src="https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?size=626&ext=jpg&ga=GA1.2.2124540030.1670361244&semt=sph">
        </div>
      </div>
       <hr class="text-white"/>
      <div class="d-flex justify-content-between">
        <div class="p-2">
          <input type="checkbox" @change="GetTotal(8)"/>
        </div>
        <div class="p-2">
          <h4>{{shawerma}}</h4>
        </div>
        <div class="p-2">
          <h4>Shawarma</h4>
          <img src="https://img.freepik.com/free-photo/side-view-chicken-doner-with-greens-cucumber-tomato-sauce-cucumber-red-onion-pita-slice-lemon-board_141793-4824.jpg?size=626&ext=jpg&ga=GA1.2.2124540030.1670361244&semt=sph">
        </div>
      </div>
      <hr class="text-white"/>
      <div class="d-flex justify-content-between">
        <div class="p-2">
          <input type="checkbox" @change="GetTotal(39)"/>
        </div>
        <div class="p-2">
          <h4>{{pasta}}</h4>
        </div>
        <div class="p-2">
          <h4>Pasta</h4>
          <img src="https://img.freepik.com/premium-photo/white-pasta-served-dish-top-view-dark-background-american-fast-food_689047-3783.jpg?size=626&ext=jpg&ga=GA1.2.2124540030.1670361244&semt=sph">
        </div>
      </div>
      <hr class="text-white"/>
      <div class="alert alert-warning text-center p-2 m-2"><h3>Drinks</h3></div>
      <div class="d-flex justify-content-between">
        <div class="p-2">
          <input type="checkbox"  @change="GetTotal(15)"/>
        </div>
        <div class="p-2">
          <h4>{{orange}}</h4>
        </div>
        <div class="p-2">
          <h4>Orange juice</h4>
          <img src="https://img.freepik.com/free-photo/glass-pitcher-juice-with-slice-orange-fruit_114579-40230.jpg?size=626&ext=jpg&ga=GA1.2.2124540030.1670361244&semt=sph">
        </div>
      </div>
       <hr class="text-white"/>
      <div class="d-flex justify-content-between">
        <div class="p-2">
          <input type="checkbox" @change="GetTotal(15)"/>
        </div>
        <div class="p-2">
          <h4>{{mango}}</h4>
        </div>
        <div class="p-2">
          <h4>Mango juice</h4>
          <img src="https://img.freepik.com/free-photo/mango-juice-wooden-floor-table_1150-9676.jpg?size=626&ext=jpg&ga=GA1.2.2124540030.1670361244&semt=sph">
        </div>
      </div>
      <hr class="text-white"/>
    </div>
  </div>
</div>
</template>

<script>
export default{
  data:()=>({
  Borger:32,
  shawerma:8,
  pasta:39,
  orange:15,
  mango:15,
  apple:15,
  total:0,
  }),
  mounted()
  {
        
  },
  created()
  {
  
  },
  methods:{
   
   GetTotal(price)
   {
    this.total += price;
   },
      
  }
}
</script>
