const payModal = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  return (
    <Modal
      open={open}
      onOk={hideModal}
      onCancel={hideModal}
      footer={[]}
      width={1000}
    >
      <div className="w-full h-[28rem] flex justify-center items-center py-8">
        <div className="w-3/12 h-full mr-2 px-4 py-4 rounded text-white bg-[rgb(31,41,55)]">
          <h3 className="mb-2">开通高级会员可享受特权:</h3>
          <li>V+模板、布局尽情享用</li>
          <li>100M升级到1G的云空间</li>
          <li>导出格式更加丰富</li>
          <li>个人商业使用授权</li>
        </div>
        <div className="flex-1 h-full px-4">
          <h3 className="font-bold text-xl text-gray-500  mb-2">
            选择你的方案
          </h3>
          <div className="w-full py-4 flex gap-4">
            <div className="border rounded w-3/12 py-4 text-center active:border-[rgb(218,112,214)]">
              <h5>高级账户-单月</h5>
              <p>19CNY</p>
              <p className="line-through">29CNY</p>
            </div>
            <div className="border rounded w-3/12 py-4 text-center active:border-[rgb(218,112,214)]">
              <h5>高级账户-单年</h5>
              <p>99CNY</p>
              <p className="line-through ">300CNY</p>
            </div>
          </div>
          <section className="w-full border rounded py-4 px-4">
            <h5 className="mb-4">支付方式</h5>
            <div className="mb-8">
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>微信支付</Radio>
                <Radio value={2}>支付宝支付</Radio>
              </Radio.Group>
            </div>
            <Button className="mb-10">去支付</Button>
          </section>
        </div>
      </div>
    </Modal>
  );
};

export default payModal;
