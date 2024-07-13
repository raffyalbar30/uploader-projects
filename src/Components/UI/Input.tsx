type Inputprops = {
    type : string;
}
const Input = (props: Inputprops) => {
    return (
        <fieldset className="mb-[15px] flex-wrap gap-5">
        <input
          className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
          id="name"
          type={props.type}
        />
      </fieldset>
    );
}

export default Input;
