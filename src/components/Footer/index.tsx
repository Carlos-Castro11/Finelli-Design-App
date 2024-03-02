"use client";
import Icon from "@/utils/Icon";

export default function Footer() {
  return (
    <footer id="contact" className="h-80 bg-primary-color">
      <h2 className="text-white">FOOTER</h2>
      {/* Second Footer */}
      <div className="">
        <p>© 2024 Todos os direitos Reservador para Giovana Finelli</p>
        <p>
          Desenvolvido por Carlos Castro{" "}
          <span>
            <Icon name="Code" />
          </span>
        </p>
      </div>
    </footer>
  );
}
