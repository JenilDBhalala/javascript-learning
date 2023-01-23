var a = 10;
{
    var a = 20;
    {
        let a = 30;
        console.log(a);
        {
            let a = 40;
            {
                const a = 50;
            }
        }
        console.log(a);
    }
}