console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for(let i=1;i<=100; i++)
    {
        if (i %2 !==0)
            {
            console.log(i);
            }    
    }


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let i=1; i<=100; i++)
    {
        if(i % 5===0 && i % 3===0)
            {
            console.log (`${i} FIZZBUZZ`);
        }else if(i %3 ===0)
            {
            console.log(`${i} FIZZ`);
        } else if (i% 5 ===0)
            {
            console.log(`${i} Buzz`);
        }else
         {
            console.log(`${i} can't be divided by 3 or 5`);
        }
            
           
        
    }   


    // Exercise 3 Section; Ex#1
    console.log("EXERCISE 3:Do Loop Ex One");

    let i =1;
    while(i<=100)
        
        {
        if (i %2 !==0)
        {
        console.log(i);
        }   

        i++;

    }  

    i =1;
    
    do
    { 
        if (i% 2==0)
            {
                console.log(i);    
            } 

            i++
            

    } while(i<=100);

    console.log("EXERCISE 3 :While Loop Ex Two");

    i =1;

    while(i<=100)
    {
        {
        if(i % 5===0 && i % 3===0)
            {
            console.log (`${i} FIZZBUZZ`);
            }
            else if(i %3 ===0)
            {
            console.log(`${i} FIZZ`);
            } 
            else if (i% 5 ===0)
            {
            console.log(`${i} Buzz`);
            }
            else
            {
                console.log(`${i} can't be divided by 3 or 5`);
            }
         
            i++
        } 

    } 
   
    console.log("EXERCISE 4:");
    
    let value = Math.round((Math.random()*500));
    let n = Math.round(Math.random()*(500-100)+100);
    let found = false;

    for(i=0; i<= n; i++)
        {
            if(i === value)
            {
                {
                console.log(`${i}Found Value!!`);               
                } 
                break;              
                                   
            } 

            i++

            if(i > n)
            {
                console.log("No Value Found");
            }
                
           
        }
    



               
                
             
       
       
    
