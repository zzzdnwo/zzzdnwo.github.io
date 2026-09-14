import ProjectDetail from '../components/ProjectDetail';
import projectDetails from '../data/projectDetails';

export default function NzHome() {
  return <ProjectDetail detail={projectDetails.nzHome} />;
}
