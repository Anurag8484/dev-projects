type ContentModalProps = {
    modalOpen: boolean;
    setModalOpen: (open: boolean) => void;
};

export function ContentModal({modalOpen, setModalOpen}: ContentModalProps){
    return (
      <div className="flex fixed z-999  ">
        {modalOpen && (
          <div className="  bg-slate-400  items-center flex   ">
            <div>asdasdas</div>
          </div>
        )}
      </div>
    );
}