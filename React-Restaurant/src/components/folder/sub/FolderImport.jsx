import { Button, Input } from "antd";
const { TextArea } = Input;

const changeInput = (e) => {
  console.log(e);
};

const FolderImport = () => {
  return (
    <div className="w-full h-screen">
      <h1 className="text-2xl text-gray-600 font-bold mb-4">导入</h1>
      <div>
        <h4 className="mb-4 text-gray-600">格式选择:</h4>
        {/* btnGroup */}
        <div className="mb-4 gap-4 flex w-full" onClick={changeInput}>
          <Button>MarkDown</Button>
          <Button>Word(.docx)</Button>
          <Button>logseq</Button>
          <Button>幕布(.md)</Button>
        </div>
        {/* select place */}
        <div className="flex items-center mb-4">
          <div className="w-5/12 border rounded">
            <TextArea
              rows={16}
              placeholder="请输入或粘贴需要导入的内容"
              maxLength={6}
            />
          </div>
          <div className="w-5/12 h-80 bg-gray"></div>
        </div>

        <Button>导入创建</Button>
      </div>
    </div>
  );
};
export default FolderImport;
