namespace DDInterfaces {

	export function autobind(
		_: any,
		_2: string,
		descriptor: TypedPropertyDescriptor<any>
	) {
		const originalMethod = descriptor.value;
		const adjDescriptor: PropertyDescriptor = {
			configurable: true,
			get() {
				const boundFn = originalMethod.bind(this);
				return boundFn;
			}
		};
		return adjDescriptor;
	}
}