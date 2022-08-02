const List = require("../modals/listModals");

exports.Add = async (req,res,next)=>{

    const list = await List.create(req.body);
    
    res.status(201).json({
        success:true,
        list
    })
    
}

exports.Getlist = async( req,res,next)=>{

    const list = await List.find();

    res.status(200).json({
        success:true,
        list
    })
}

exports.deletetask= (async (req, res, next) => {
    const list = await List.findById(req.params.id);
  
   
    
    await list.remove();
  
    res.status(200).json({
      success: true,
     
    });
});


exports.Updatetask = async(req,res,next) =>{
    let list = await List.findById(req.params.id);
    

    list = await List.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators: true,
        useFindAndModify:false,
    })
    
    res.status(200).json({
        success: true,
        list
    })
  }

exports.GetBYid = async(req,res,next) =>{

    const list = await List.findById(req.params.id);

    res.status(200).json({
        success: true,
        list
      });

}


