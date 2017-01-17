import { recruitement } from '../../../providers';

/**
 * @api {get} /recruitement? Get recruitement data.
 */
export default async function get(ctx, next) {
  const { session: { user }, params } = ctx;
  ctx.body = (user && user.email) ? ({
    recruitement: await recruitement(params || {}),
  }) : ({
    status: 'Unauthorized user request',
  });

  if (next) next();
}
