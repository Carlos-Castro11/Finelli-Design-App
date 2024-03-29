// Icons
import Icon from "@/utils/Icon";

export default function SecondFooter() {
  return (
    <div className="bg-background-color p-4 shadow-inner text-[0.8rem] sm:text-sm lg:text-base text-primary-color">
      <div
        className={`grid sm:grid-cols-2 gap-5
        relative after:absolute after:content['']
        after:bg-gradient-to-r from-transparent via-light-blue to-transparent
        after:h-[1px] after:w-full
        after:left-0 after:bottom-1/2
        sm:after:h-full sm:after:w-[1px] sm:after:left-1/2 sm:after:bottom-0
        `}
      >
        <div className="flex items-center justify-center">
          <p>© 2024 Todos os direitos reservados para Giovana Finelli</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="flex gap-1 items-center">
            Desenvolvido por Carlos Castro
            <span>
              <Icon name="Code" size={15} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
