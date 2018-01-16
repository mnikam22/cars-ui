/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface JQuery{
	_data: any;
	owlCarousel(options?: any) : JQuery
}

interface JQueryStatic{
	blockUI(options?: any) : JQueryStatic,
	unblockUI(options?: any) : JQueryStatic,
	owlCarousel(options?: any) : JQueryStatic
}