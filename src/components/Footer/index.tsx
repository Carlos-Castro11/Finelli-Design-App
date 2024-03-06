"use client";
// Icon
import Icon from "@/utils/Icon";

export default function Footer() {
  return (
    <footer id="contact">
      <h2 className="text-white h-80 bg-primary-color">FOOTER</h2>
      {/* Second Footer */}
      <div className="bg-background-color p-4 shadow-inner text-xs sm:text-sm lg:text-base xl:text-lg">
        <div className="grid grid-cols-2 divide-x divide-primary-color">
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
    </footer>
  );
}
