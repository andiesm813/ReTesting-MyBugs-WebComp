import { BoxOfficeRevenueType } from '../models/Service/box-office-revenue-type';
import { Service } from '../static-data/service';

class ServiceService {
	public getBoxOfficeRevenue(): BoxOfficeRevenueType[] {
		return Service['BoxOfficeRevenueType'];
	}
}
export const serviceService: ServiceService = new ServiceService();
