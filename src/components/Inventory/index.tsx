
const FurnitureType = ({ typeOptions }: {typeOptions:any}) => {
 
  const typesArray = typeOptions.split(",").map((type:any) => type.trim());
  const firstType = typesArray[0];

  return (
    <div>
      <p className=" font-bold">{`(${firstType})`}</p>
    </div>
  );
};

export const Inventory = ({inventory}:{inventory: any}) => {
    console.log(inventory)
    const maxItems = Math.max(
      ...inventory.category.map((cat:any) => cat.items.length)
    );
   
        return (
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex gap-4">
              {inventory.category.map((category: any) => (
                <div key={category} className="w-full">
                  <h4 className=" font-bold">{category.displayName}</h4>
                </div>
              ))}
            </div>
            {[...Array(maxItems)].map((_, itemIndex) => (
              <div key={itemIndex} className="w-full flex gap-4">
                {inventory.category.map((category: any) => (
                  <div key={category} className="w-full flex gap-2">
                    {category.items[itemIndex] ? (
                      <div className="flex w-full">
                        <div className=" w-11/12 flex flex-col gap-1">
                          <p className=" font-medium">
                            {category.items[itemIndex].displayName}
                          </p>
                          {category.items[itemIndex].typeOptions &&
                            category.items[itemIndex].typeOptions.length >0 && (
                              <FurnitureType
                                typeOptions={
                                  category.items[itemIndex].typeOptions
                                }
                              />
                            )}
                        </div>
                        <p className=" w-1/12 font-bold">
                          {category.items[itemIndex].order}
                        </p>
                      </div>
                    ) : (
                      <div className="w-full flex gap-2">
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        );
       
}