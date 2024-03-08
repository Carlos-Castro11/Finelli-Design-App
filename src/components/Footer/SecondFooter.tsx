// Icons
import Icon from "@/utils/Icon";

export default function SecondFooter() {
  return (
    <div className="bg-background-color p-4 shadow-inner text-[0.8rem] sm:text-sm lg:text-base xl:text-lg">
      <div
        className={`grid sm:grid-cols-2 gap-5
        relative after:absolute after:content['']
        after:bg-gradient-to-r from-transparent via-primary-color to-transparent
        after:h-[1px] after:w-full
        after:left-0 after:bottom-1/2
        `}
      >
        <div className="flex items-center justify-center">
          <p>© 2024 Todos os direitos reservados para Giovana Finelli</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="flex gap-1 items-center">
            Desenvolvido por Carlos Castro
            <span className="text-primary-color">
              <Icon name="Code" size={15} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
