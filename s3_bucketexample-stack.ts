import { Stack, StackProps, RemovalPolicy } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket, BlockPublicAccess} from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';

export class S3BucketexampleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, "S3Bucket", {
      bucketName: "your-bucket-name-3453428",
      versioned: true,
      blockPublicAccess: new BlockPublicAccess({
        blockPublicAcls: false,
        blockPublicPolicy: false,
        ignorePublicAcls: false,
        restrictPublicBuckets: false
      }),
      removalPolicy: RemovalPolicy.DESTROY,
      websiteIndexDocument: 'index.html', // Specify the default index document
      websiteErrorDocument: 'error.html'   // Optional: Specify the error document
    });

    new BucketDeployment(this, 'DeployWebsite', {
      sources: [Source.asset('c:/html')],
      destinationBucket: bucket,
    });
  }
}
