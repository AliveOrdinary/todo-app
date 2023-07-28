import InputField from "@/components/InputField";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-mobile-light-bgi dark:bg-mobile-dark-bgi  sm:bg-light-bgi sm:dark:bg-dark-bgi bg-no-repeat bg-contain ">
      <div className="flex  mt-8 md:mt-8 lg:mt-10 xl:mt-20 md:h-2/4  justify-between w-10/12 sm:w-2/4">
        <h1 className="text-VLGrayBlueLT md:text-3xl text-4xl font-bold tracking-widest ">
          TODO
        </h1>
        <ThemeSwitcher />
      </div>
      <InputField />
      <TodoList />
    </div>
  );
}
