"use client";

import { motion } from "framer-motion";

export default function Loading(){

return(

<div className="fixed inset-0 bg-black flex items-center justify-center z-[999]">

<motion.div

animate={{
scale:[1,1.3,1]
}}

transition={{
duration:1.5,
repeat:Infinity
}}

className="text-7xl"
>
❤️
</motion.div>

</div>

)

}