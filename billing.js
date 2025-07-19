// ----calculation---
function calculateTotal() {
         const TeaPrice = 10;
        const CoffeePrice = 15;
        const ChickenBuffzPrice = 25;
        const VegBuffzPrice = 20;
        const KaalanBuffzPrice = 20;
        const EggBondaPrice = 10;
        const ParupuVadaiPrice = 8;
        const SamossaPrice = 8;
        const BajjiPrice = 8;
        const MedhuVadaiPrice = 8;

        const TeaQty = document.getElementById("TeaQty");
        const CoffeeQty = document.getElementById("CoffeeQty");
        const ChickenBuffzQty = document.getElementById("ChickenBuffzQty");
        const VegBuffzQty = document.getElementById("VegBuffzQty");
        const KaalanBuffzQty = document.getElementById("KaalanBuffzQty");
        const EggBondaQty = document.getElementById("EggBondaQty");
        const ParupuVadaiQty = document.getElementById("ParupuVadaiQty");
        const MedhuVadaiQty = document.getElementById("MedhuVadaiQty");
        const BajjiQty = document.getElementById("BajjiQty");
         const SamossaQty = document.getElementById("SamossaQty");
    
        const totalDisplay = document.getElementById("totalBill");

// -----over all total----
            const Total =
                (parseInt(TeaQty.value) || 0) * TeaPrice +
                (parseInt(CoffeeQty.value) || 0) * CoffeePrice +
                (parseInt(ChickenBuffzQty.value) || 0) * ChickenBuffzPrice +
                (parseInt (VegBuffzQty.value) || 0) * VegBuffzPrice +
                (parseInt (KaalanBuffzQty.value)|| 0) * KaalanBuffzPrice +
                (parseInt (EggBondaQty.value)||0) * EggBondaPrice +
                (parseInt(ParupuVadaiQty.value) || 0) * ParupuVadaiPrice +
                (parseInt(MedhuVadaiQty.value) || 0) * MedhuVadaiPrice +
                (parseInt(BajjiQty.value) || 0) * BajjiPrice +
                (parseInt(SamossaQty.value) || 0) * SamossaPrice;
                totalDisplay.innerText = `Total: ₹${Total}`;

// ----Item Total---
      
        // Tea---
        const Tea = (parseInt(TeaQty.value) || 0) * TeaPrice;
        document.getElementById("TeaBill").innerText=`₹${Tea}`;

         // Coffee---
        const Coffee = (parseInt(CoffeeQty.value) || 0) * CoffeePrice;
        document.getElementById("CoffeeBill").innerText=`₹${Coffee}`;

          // ChikenBuffzz---
        const ChickenBuffz = (parseInt(ChickenBuffzQty.value) || 0) * ChickenBuffzPrice;
        document.getElementById("ChickenBuffzBill").innerText=`₹${ChickenBuffz}`;


         // VegBuffzzz---
        const VegBuffz = (parseInt (VegBuffzQty.value) || 0) * VegBuffzPrice;
        document.getElementById("VegBuffzBill").innerText=`₹${VegBuffz}`;

         // KallanBuffzz---
        const KaalanBuffz = (parseInt (KaalanBuffzQty.value)|| 0) * KaalanBuffzPrice;
        document.getElementById("KaalanBuffzBill").innerText=`₹${KaalanBuffz}`;

         // EggBonda---
        const EggBonda =(parseInt (EggBondaQty.value)||0) * EggBondaPrice;
        document.getElementById("EggBondaBill").innerText=`₹${EggBonda}`;

        
         // Samossa---
        const Samossa = (parseInt(SamossaQty.value) || 0) * SamossaPrice;
        document.getElementById("SamossaBill").innerText=`₹${Samossa}`;

        // paruppuVadai---
        const ParupuVadai = (parseInt(ParupuVadaiQty.value) || 0) * ParupuVadaiPrice;
        document.getElementById("ParupuVadaiBill").innerText =  `₹${ParupuVadai}`;
         
         // meduvadai---
        const MedhuVadai =  (parseInt(MedhuVadaiQty.value) || 0) * MedhuVadaiPrice;
        document.getElementById("MedhuVadaiBill").innerText = `₹${MedhuVadai}`;
       
        // bajji---
        const Bajji =(parseInt(BajjiQty.value) || 0) * BajjiPrice;
        document.getElementById("BajjiBill").innerText = `₹${Bajji}`;
      

    }
   TeaQty.addEventListener("input", calculateTotal);
        CoffeeQty.addEventListener("input", calculateTotal);
        ChickenBuffzQty.addEventListener("input", calculateTotal);
        VegBuffzQty.addEventListener("input",calculateTotal);
        KaalanBuffzQty.addEventListener("input",calculateTotal);
        EggBondaQty.addEventListener("input",calculateTotal);
        ParupuVadaiQty.addEventListener("input",calculateTotal);
        MedhuVadaiQty.addEventListener("input", calculateTotal);
        BajjiQty.addEventListener("input", calculateTotal);
        SamossaQty.addEventListener("input",calculateTotal);


function welcome(){
    // alert("Thank you...!");
    location.reload();
}